import { ClientProviders } from "@/components/ClientProviders";
import "@/styles/globals.css";

export default function App({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ClientProviders>{children}</ClientProviders>;
}
