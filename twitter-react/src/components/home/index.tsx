import { Grid, GridItem } from "@chakra-ui/react"
import { Tweets } from "./tweets"
import { Sidebar } from "./sidebar"

export const Home = () => {
    return (
        <Grid templateColumns={{base: '0.5fr 2fr', sm: '0.5fr 3fr', md: "0.5fr 4fr", xl: "1fr 1.7fr 1fr"}}>
            <GridItem w='100%' h='100vh'><Sidebar /></GridItem>
            <GridItem w='100%' border='1px solid' borderColor={'gray.100'} h='100vh'><Tweets /></GridItem>
            <GridItem display={{ base: 'none', sm: 'none', md: 'none', xl: 'grid' }} w='100%' h='100vh' bg='blue.500' />
        </Grid>
    )
}