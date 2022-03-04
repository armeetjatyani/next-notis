import Head from "next/head";
import Image from "next/image";
import { useState, useRef, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowCircleUpIcon, BellIcon } from "@heroicons/react/solid";

export default function Home() {
	const [notificationText, setNotificationText] = useState("Here's a notification for you!");
	const [pos, setPos] = useState("top-center");
	const [type, setType] = useState("success");
	const textInput = useRef(null);
	const notify = () => {
		switch (type) {
			case "success": {
				toast.success(notificationText);
				break;
			}
			case "error": {
				toast.error(notificationText);
				break;
			}
			case "promise": {
				toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
					loading: "Loading",
					success: notificationText,
					error: "Error!",
				});
				break;
			}
		}
	};
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="flex flex-col items-center justify-center w-screen h-screen space-y-8 font-medium bg-white selection:bg-black selection:text-white">
				<div className="p-8 space-y-8 shadow-2xl rounded-3xl">
					{/* Text */}
					<div className="space-y-2">
						<h1 className="text-xl font-black">Notification Text</h1>
						<input className="w-full p-2 ring-2 ring-black rounded-xl" type="text" ref={textInput} id="textInput" onChange={() => textInput !== null && setNotificationText(textInput.current.value)} value={notificationText} />
					</div>

					{/* Positioning */}
					<div className="">
						<h1 className="mb-2 text-xl font-black">Positioning</h1>
						<RadioGroup value={pos} onChange={setPos} className="">
							<div className="flex items-center w-full justify-evenly">
								<RadioGroup.Option value="top-left" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="-rotate-[45deg]" />
										</button>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value="top-center" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="" />
										</button>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value="top-right" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="rotate-[45deg]" />
										</button>
									)}
								</RadioGroup.Option>
							</div>
							<div className="flex items-center w-full mt-2 justify-evenly">
								<RadioGroup.Option value="bottom-left" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="rotate-[225deg]" />
										</button>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value="bottom-center" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="rotate-[180deg]" />
										</button>
									)}
								</RadioGroup.Option>
								<RadioGroup.Option value="bottom-right" as={Fragment}>
									{({ checked }) => (
										<button className={`px-6 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>
											<ArrowCircleUpIcon width={20} height={20} className="rotate-[135deg]" />
										</button>
									)}
								</RadioGroup.Option>
							</div>
						</RadioGroup>
					</div>

					{/* Type */}
					<div className="space-y-2">
						<h1 className="text-xl font-black">Type</h1>
						<RadioGroup value={type} onChange={setType} className="flex items-center justify-between">
							<RadioGroup.Option value="success" as={Fragment}>
								{({ checked }) => <button className={`px-4 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>Success</button>}
							</RadioGroup.Option>
							<RadioGroup.Option value="error" as={Fragment}>
								{({ checked }) => <button className={`px-4 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>Error</button>}
							</RadioGroup.Option>
							<RadioGroup.Option value="promise" as={Fragment}>
								{({ checked }) => <button className={`px-4 py-1 rounded-lg select-none ring-2 ring-black hover:scale-95 duration-300 ${checked && "bg-black text-white"}`}>Promise</button>}
							</RadioGroup.Option>{" "}
						</RadioGroup>
					</div>

					{/* Button */}
					<button className="flex items-center px-10 py-4 space-x-2 font-black text-white transition-all duration-300 bg-black shadow-md rounded-2xl group active:scale-95" onClick={notify}>
						<BellIcon width={30} height={30} className="group-hover:rotate-[23deg] transition-all duration-300" />
						<p>Show Notification</p>
					</button>
				</div>

				{/* Noti UI */}
				<Toaster
					position={pos}
					toastOptions={{
						duration: 5000,
						className: "transition-all duration-300",
						success: {
							className: "",
						},
						error: {
							className: "",
						},
					}}
				/>
			</div>
		</>
	);
}
