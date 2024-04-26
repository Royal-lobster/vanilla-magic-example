import { ClientProviders } from "@/components/ClientProviders";
import "@/styles/globals.css";

export default function App({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Wagmi Magic Connector Example - Next js App Dir</title>
			</head>
			<body className="bg-neutral-800">
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
