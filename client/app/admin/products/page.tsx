import React from 'react';
import AddProcuct from '../_components/add-product';
import { Separator } from '@/components/ui/separator';
import Filter from '@/components/shared/filter';

const Page = () => {
	return (
		<>
			<div className='flex justify-between items-center w-full'>
				<h1 className='text-xl font-bold'>Products</h1>
				<AddProcuct />
			</div>

			<Separator className='my-3' />
			<Filter showCategory />

			<div className='grid grd-cols-1 md:grid-cols-2 gap-4 mt-3'></div>
		</>
	);
};

export default Page;
