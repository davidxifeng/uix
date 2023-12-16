import React, { useState } from "react";
import { Button, } from '@mantine/core';
import { createTheme, MantineProvider } from "@mantine/core";
import { Demo2, HeaderMegaMenu } from './header';
import { Notifications } from '@mantine/notifications'

import { IconSwimming } from '@tabler/icons-react';
import { AppShell, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications'

const theme = createTheme({
	/** Put your mantine theme override here */
});

export function ReactRoot() {
	const [opened, { toggle }] = useDisclosure();
	const [autoClose, setAutoClose] = useState(false);
	return <React.StrictMode>
		<MantineProvider theme={theme} defaultColorScheme="light">
			<AppShell
				header={{ height: 100 }}
				navbar={{ width: 200, breakpoint: 'sm' }}
				aside={{ width: 150, breakpoint: 'sm' }}
				// footer={{ height: 100 }}
				padding={'md'}
			>
				<AppShell.Header> <HeaderMegaMenu /> </AppShell.Header>
				<AppShell.Navbar p='md'>
					<p>hi</p>
					<p>go</p>
				</AppShell.Navbar>
				<AppShell.Main style={{ minHeight: "unset" }}>
					<p>go</p>
					<Demo2 />
					<p>go</p>
					<p>go</p>
					<Button onClick={() => setAutoClose(!autoClose)}>AutoClose: {autoClose.toString()}</Button>
					<Button variant='gradient' gradient={{ from: 'indigo', to: 'grape', deg: 90 }}
						onClick={() => {
							notifications.show({
								title: 'hello',
								icon: <IconSwimming />,
								message: ' this is a long text this is a long text this is a long text    this is a long text ',
								autoClose: autoClose ? 1 * 1000 : false,
							})
						}}
					>Button</Button>
					<Notifications
						style={{
							paddingLeft: 220,
							paddingRight: 150,
							position: 'absolute',
							left: 0,
							top: 0,
							zIndex: 500,
						}}
						position="top-right"
						withinPortal={true}
					/>
				</AppShell.Main>
				<AppShell.Aside>
					<p>i am on aside</p>
				</AppShell.Aside>
			</AppShell>
		</MantineProvider>
	</React.StrictMode>
}