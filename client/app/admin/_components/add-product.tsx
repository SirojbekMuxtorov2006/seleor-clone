import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';
import { PlusCircle } from 'lucide-react';

const AddProcuct = () => {
	return (
		<>
			<Button>
				<span>Add Product</span>
				<PlusCircle />
			</Button>
		</>
	);
};

export default AddProcuct;
