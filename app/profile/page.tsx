'use client'

import { useState, useEffect } from 'react'
import tasks from '../../lib/data.json'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [selectedDay, setSelectedDay] = useState<string>('day1')
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([])

  const { data: session } = useSession();
  const router = useRouter();
  const userId = session?.user?.id;

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/profile?userId=${userId}`)
      const data = await res.json()
      setUser(data)
      setCompletedTasks(data.progress[selectedDay] || new Array(tasks[selectedDay].length).fill(false))
    }
    if(userId) {
      fetchProfile();
    }
  }, [selectedDay, userId])

  const toggleTask = (index: number) => {
    const updatedTasks = [...completedTasks]
    updatedTasks[index] = !updatedTasks[index]
    setCompletedTasks(updatedTasks)
  }

  const submitProgress = async () => {
    await fetch('/api/profile', {
      method: 'POST',
      body: JSON.stringify({ userId, day: selectedDay, completedTasks }),
      headers: { 'Content-Type': 'application/json' },
    })
    alert(`Progress for ${selectedDay} saved!`)
  }

  return (
    <div className="p-6">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{user.name}'s Profile</h1>
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <div className="w-1/4">
              {Object.keys(tasks).map((day) => (
                <button
                  key={day}
                  className={`block w-full p-2 mb-2 rounded ${selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="w-3/4 p-4 border rounded">
              <h2 className="text-xl font-semibold mb-3">{selectedDay.toUpperCase()} Tasks</h2>
              <ul>
                {tasks[selectedDay].map((task, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={completedTasks[index] || false}
                      onChange={() => toggleTask(index)}
                      className="cursor-pointer"
                    />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <button onClick={submitProgress} className="mt-4 p-2 bg-green-600 text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  )
}

export default page