'use client';

import React from 'react';
import { format } from 'date-fns';

export interface Registration {
	id: string;
	formType: string;
	name: string;
	phone: string;
	email?: string;
	address?: string;
	message?: string;
	createdAt: string;
}

interface Props {
	data: Registration[];
}

export default function RegistrationsList({ data }: Props) {
	return (
		<div className="overflow-x-auto ">
			<table className="min-w-full table-auto border-collapse">
				<thead>
					<tr>
						{[
							'ID',
							'Type',
							'Name',
							'Phone',
							'Email',
							'Address',
							'Message',
							'Date',
						].map((h) => (
							<th
								key={h}
								className="border border-gray-500 text-sm px-3 font-medium py-2 text-left bg-gray-200"
							>
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((r) => (
						<tr key={r.id} className="odd:bg-white even:bg-gray-50">
							<td className="border border-gray-500 px-3 py-1">{r.id}</td>
							<td className="border border-gray-500 px-3 py-1">{r.formType}</td>
							<td className="border border-gray-500 px-3 py-1">{r.name}</td>
							<td className="border border-gray-500 px-3 py-1">{r.phone}</td>

							<td className="border border-gray-500 px-3 py-1">
								{r.email || ''}
							</td>
							<td className="border border-gray-500 px-3 py-1">
								{r.address || ''}
							</td>

							<td className="border border-gray-500 px-3 py-1">
								{r.message || ''}
							</td>
							<td className="border border-gray-500 px-3 py-1">
								{format(new Date(r.createdAt), 'MM/dd/yyyy, hh:mm:ss a')}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
