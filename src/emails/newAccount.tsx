// src/emails/newAccount.tsx
import * as React from "react";
import { Tailwind, Section, Text } from "@react-email/components";

export interface NewAccountProps {
	email: string;
	verifyToken: string;
}

const NewAccountMail: React.FC<NewAccountProps> = ({ email, verifyToken }) => {
	return (
		<Tailwind>
			<Section className="flex justify-center items-center w-full min-h-screen font-sans">
				<Section className="flex flex-col items-center w-76 rounded-2xl px-6 py-1 bg-gray-50">
					<Text className="text-xs font-medium text-violet-500">
						Verify your Email Address ${email}
					</Text>
					<Text className="text-gray-500 my-0">
						Use the following link to verify your email address
					</Text>
					<Text className="text-5xl font-bold pt-2">
						<a
							href={`${process.env.BE_URL}/user/verify-email?verifyToken=${verifyToken}`}
						>
							{" "}
							Activate your account{" "}
						</a>
					</Text>
					<Text className="text-gray-600 text-xs">Thank you joining us</Text>
				</Section>
			</Section>
		</Tailwind>
	);
};

export default NewAccountMail;
