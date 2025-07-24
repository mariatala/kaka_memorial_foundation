'use client'

import React from 'react'
import {format} from 'date-fns'

export interface Registration {
  id: number
  formType: string
  name: string
  phone: string
  pointOfContact?: string
  address?: string
  socialLinks?: string
  message?: string
  createdAt: string
}

interface Props {
  data: Registration[]
}

export default function RegistrationsTable({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            {[
              'ID', 'Type', 'Name', 'Phone',
              'Contact', 'Address', 'Links', 'Message', 'Date'
            ].map((h) => (
              <th
                key={h}
                className="border px-3 py-2 text-left bg-gray-100"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id} className="odd:bg-white even:bg-gray-50">
              <td className="border px-3 py-1">{r.id}</td>
              <td className="border px-3 py-1">{r.formType}</td>
              <td className="border px-3 py-1">{r.name}</td>
              <td className="border px-3 py-1">{r.phone}</td>
              <td className="border px-3 py-1">{r.pointOfContact || ''}</td>
              <td className="border px-3 py-1">{r.address || ''}</td>
              <td className="border px-3 py-1">{r.socialLinks || ''}</td>
              <td className="border px-3 py-1">{r.message || ''}</td>
              <td className="border px-3 py-1">
               {format(new Date(r.createdAt), 'MM/dd/yyyy, hh:mm:ss a')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
