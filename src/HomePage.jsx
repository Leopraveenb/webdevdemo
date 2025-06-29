import React, { useState } from "react";

const channels = [
	{
		name: "Discovery Channel",
		url: "https://www.youtube.com/@DiscoveryChannel/featured",
	},
	{
		name: "National Geographic",
		url: "https://www.youtube.com/@NatGeo/featured",
	},
	{
		name: "BBC News",
		url: "https://www.youtube.com/@BBCNews/featured",
	},
	{
		name: "Cartoon Network",
		url: "https://www.youtube.com/@cartoonnetwork/featured",
	},
];

function LoginPage({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username.trim() && password.trim()) {
			onLogin();
		} else {
			setError("Please enter username and password");
		}
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background: "#EAEDED",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<form
				onSubmit={handleSubmit}
				style={{
					background: "#fff",
					padding: 40,
					borderRadius: 16,
					boxShadow: "0 2px 16px #0077ff22",
					minWidth: 340,
				}}
			>
				<h2
					style={{
						textAlign: "center",
						color: "#0077ff",
						marginBottom: 32,
					}}
				>
					Login
				</h2>
				{error && (
					<div
						style={{
							color: "#d32f2f",
							marginBottom: 16,
							textAlign: "center",
						}}
					>
						{error}
					</div>
				)}
				<div style={{ marginBottom: 20 }}>
					<label
						style={{
							fontWeight: 600,
							color: "#232F3E",
						}}
					>
						Username
					</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						style={{
							width: "100%",
							padding: 12,
							borderRadius: 8,
							border: "1px solid #bbb",
							fontSize: 16,
							marginTop: 6,
						}}
						placeholder="Enter username"
					/>
				</div>
				<div style={{ marginBottom: 28 }}>
					<label
						style={{
							fontWeight: 600,
							color: "#232F3E",
						}}
					>
						Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{
							width: "100%",
							padding: 12,
							borderRadius: 8,
							border: "1px solid #bbb",
							fontSize: 16,
							marginTop: 6,
						}}
						placeholder="Enter password"
					/>
				</div>
				<button
					type="submit"
					style={{
						width: "100%",
						padding: "14px 0",
						background:
							"linear-gradient(90deg, #0077ff 0%, #00c6ff 100%)",
						color: "#fff",
						fontWeight: 700,
						fontSize: 18,
						border: "none",
						borderRadius: 10,
						boxShadow: "0 2px 8px #00c6ff44",
						cursor: "pointer",
						transition:
							"background 0.2s, transform 0.15s",
					}}
					onMouseOver={(e) => {
						e.currentTarget.style.background =
							"linear-gradient(90deg, #00c6ff 0%, #0077ff 100%)";
						e.currentTarget.style.transform = "scale(1.04)";
					}}
					onMouseOut={(e) => {
						e.currentTarget.style.background =
							"linear-gradient(90deg, #0077ff 0%, #00c6ff 100%)";
						e.currentTarget.style.transform = "scale(1)";
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
}

export default function HomePage() {
	const [loggedIn, setLoggedIn] = useState(false);

	if (!loggedIn) {
		return <LoginPage onLogin={() => setLoggedIn(true)} />;
	}

	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				background: "#EAEDED",
				minHeight: "100vh",
			}}
		>
			<header
				style={{
					background: "#131921",
					color: "#fff",
					padding: "16px 0",
					textAlign: "center",
				}}
			>
				<h1
					style={{
						margin: 0,
						fontSize: 32,
						letterSpacing: 2,
					}}
				>
					MULTI TV CHANNELS
				</h1>
				<p
					style={{
						margin: 0,
						fontSize: 18,
						marginTop: 8,
					}}
				>
					Watch your favorite channels online
				</p>
			</header>
			<main
				style={{
					maxWidth: 700,
					margin: "32px auto",
					background: "#fff",
					borderRadius: 12,
					boxShadow: "0 2px 12px #0001",
					padding: 32,
				}}
			>
				<h2
					style={{
						textAlign: "center",
						marginBottom: 32,
						color: "#0077ff",
					}}
				>
					Channel Links
				</h2>
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						margin: 0,
					}}
				>
					{channels.map((ch) => (
						<li
							key={ch.name}
							style={{
								marginBottom: 24,
								textAlign: "center",
							}}
						>
							<a
								href={ch.url}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "inline-block",
									fontSize: 24,
									color: "#fff",
									background:
										"linear-gradient(90deg, #0077ff 0%, #00c6ff 100%)",
									borderRadius: 16,
									padding: "22px 48px",
									textDecoration: "none",
									fontWeight: 700,
									boxShadow:
										"0 4px 24px #00c6ff44, 0 1.5px 8px #0077ff33",
									transition:
										"transform 0.15s, box-shadow 0.15s, background 0.2s, color 0.2s",
									border: "none",
									letterSpacing: 1.2,
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.background =
										"linear-gradient(90deg, #00c6ff 0%, #0077ff 100%)";
									e.currentTarget.style.transform = "scale(1.06)";
									e.currentTarget.style.boxShadow =
										"0 8px 32px #00c6ff66, 0 2px 12px #0077ff55";
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.background =
										"linear-gradient(90deg, #0077ff 0%, #00c6ff 100%)";
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow =
										"0 4px 24px #00c6ff44, 0 1.5px 8px #0077ff33";
								}}
							>
								{ch.name}
							</a>
						</li>
					))}
				</ul>
			</main>
			<footer
				style={{
					background: "#232F3E",
					color: "#fff",
					textAlign: "center",
					padding: 16,
					marginTop: 32,
				}}
			>
				&copy; {new Date().getFullYear()} Multi TV Channel Demo. For demo
				purposes only.
			</footer>
		</div>
	);
}
