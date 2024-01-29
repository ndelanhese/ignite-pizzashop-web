"use client";

import { deleteCookie } from "@/services/cookies";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
	const { replace } = useRouter();
	const handleSignOut = async () => {
		try {
			await deleteCookie("auth");
			replace("/sign-in");
		} catch {}
	};

	return (
		<button
			type="button"
			className="w-full inline-flex items-center"
			onClick={handleSignOut}
		>
			<LogOut className="w-4 h-4 mr-2" />
			<span>Sair</span>
		</button>
	);
};
