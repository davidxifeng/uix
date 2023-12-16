import { Button, useMantineColorScheme, Group } from '@mantine/core';
export function Demo2() {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();
    return <>
        <Button onClick={() => setColorScheme('dark')}>dark</Button>
        <Button onClick={() => setColorScheme('light')}>light</Button>
        <p>demo 2</p>
    </>
}