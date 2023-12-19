// index.jsx
import '@radix-ui/themes/styles.css';
import { ThickArrowUpIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { Flex, Text, Button, Theme, ThemePanel, Heading, Em, Grid, Box } from '@radix-ui/themes';


const PopoverDemo = () => (
    <Popover.Root>
        <Popover.Trigger className='btn ml-5'>More info</Popover.Trigger>
        <Popover.Portal>
            <Popover.Content sideOffset={5}>
                <Popover.Arrow />
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <p className='prose'>this is a card for popover.</p>
                    </div>
                </div>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export function ReactRoot() {
    return <>
        <Theme accentColor='green'>
            <Grid columns={'3'} gap={'5'}>
                <Flex direction="column" gap="2">
                    <Heading size='9' weight={'bold'}>title 1</Heading>
                    <Heading size='7' weight={'medium'}>title 2</Heading>
                    <Heading size='5' weight={'medium'}>title 3</Heading>
                    <Text>Hello from <Em>Radix</Em> Themes :</Text>
                    <Flex gap={'3'}>
                        <Button variant='soft'>Cancel</Button>
                        <Button>Ok</Button>
                    </Flex>
                </Flex>
                <Flex>
                    <Text mt="2">this is main content</Text>
                </Flex>
                <Flex>
                    <Text mt="2">this is sidebar</Text>
                </Flex>
            </Grid>

            <ThemePanel defaultOpen={false} />
        </Theme >
        <button className="btn"> <ThickArrowUpIcon /> hello</button>
        <p></p>
        <PopoverDemo />
        <article className="prose">
            <h1>title</h1>
            <p>tailwind & daisy ui is great</p>
            <button >hello 2</button>
        </article>
    </>
}