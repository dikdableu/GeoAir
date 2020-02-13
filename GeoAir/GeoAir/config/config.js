import { Auth } from 'aws-amplify';

export const config = {
	env: 'prod',
	cognito: {
		Auth: {
		  identityPoolId: 'eu-central-1:66f6f123-bf70-4c39-8df1-e2c3eca904ac',
		  region: 'eu-central-1',
		  userPoolId: 'eu-central-1_qTaXxURzf',
		  userPoolWebClientId: '3i2ku4uhatvgkqtip7i8gqjl4e'
		},
	}
}
