
import Cards2 from "@/components/cards/cards2";
import Cards1 from "@/components/cards/Cards1";
import { maincardslist } from "@/components/lists/maincardslist";


export default function Home() {
	return (
		<>
			
			<h1 className="text-white">Bhanuka1</h1>



			<div className="grid grid-cols-6 gap-4 ">
				{maincardslist.map((item, index) => (
					<Cards2 key={index} message={item.title} url={item.link1} image={item.img} />


				))}</div>


		</>


	);
}
