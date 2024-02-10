import Image from "next/image";
import BankingForm from "./components/BankingForm";
import BankForm from "./components/BankForm";
BankForm;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-20 bg-black">
			<BankForm />
		</main>
	);
}
