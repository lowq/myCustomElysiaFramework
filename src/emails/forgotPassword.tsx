// src/emails/newAccount.tsx
import * as React from "react";
import { Tailwind, Section, Text } from "@react-email/components";

export interface ForgotPasswordProps {
	username: string;
	surname: string;
	newPassword: string;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
	username,
	surname,
	newPassword,
}) => {
	return (
		<Tailwind>
			<Section className="flex justify-center items-center w-full min-h-screen font-sans">
				<Section className="flex flex-col items-center w-76 rounded-2xl px-6 py-1 bg-gray-50">
					<Text className="text-xs font-medium text-violet-500">
						Reset your Password
					</Text>
					<Text className="text-gray-500 my-0">
						Hello {username} {surname}, we have reset your password
					</Text>
					<Text className="text-2xl font-bold pt-2">
						New Password: {newPassword}
					</Text>
					<Text className="text-gray-600 text-xs">
						Thank you for joining us
					</Text>
				</Section>
			</Section>
		</Tailwind>
	);
};

export default ForgotPassword;
