import React from 'react'

export default function TimePicker({handleChangeTime}: props) {
  return (
    <div>
      <div className="flex w-[160px]">
        <input
          type="time"
          id="time"
          className="rounded-none rounded-s-lg bg-white border text-gray-900 leading-none focus:primary block flex-1 text-sm border-gray-300 p-2"
          min="09:00"
          max="18:00"
          onChange={handleChangeTime}
          required
        />
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
