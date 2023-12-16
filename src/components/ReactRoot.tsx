
import React from "react";
import { Button, } from '@mantine/core';
import { createTheme, MantineProvider } from "@mantine/core";
import { Demo2 } from './Demo';

const theme = createTheme({
	/** Put your mantine theme override here */
});



export function ReactRoot() {
	return <React.StrictMode>
		<MantineProvider theme={theme} defaultColorScheme="light">
			<p>demo</p>
			<Demo2 />
			<p>hello react</p>
			<Button variant='gradient' gradient={{ from: 'indigo', to: 'grape', deg: 90 }}>Button</Button>
			<p>text</p>
		</MantineProvider>
	</React.StrictMode>
}