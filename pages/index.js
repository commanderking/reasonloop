import Head from "next/head";
import {
  Box,
  Heading,
  Grid,
  Button,
  Text,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import AuthenticTable from "components/home/AuthenticTable";

export default function Home() {
  return (
    <Box textAlign="center">
      <Head textAlign="center">
        <title>Reason Loop - Truly Authentic Math Problems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading>Truly Authentic Math Problems</Heading>
        <Box mt={10}>
          <Heading maxWidth={500} margin="auto" size="md">
            Houses within 4 km of a cell tower can receive coverage. Where
            should we build the cell towers?
          </Heading>
          <Box mt={4}>
            <Image src="/demo_2.gif" alt="demo gif" width={500} height={500} />
          </Box>
          <Link href="/project/1">
            <Button colorScheme="teal" width={100} mt={4}>
              Try It!
            </Button>
          </Link>
        </Box>
        <Divider mt={8} />
        <Box mt={10}>
          <Heading mb={10} size="lg">
            What makes a problem authentic?
          </Heading>
          <AuthenticTable />
        </Box>
      </Box>
    </Box>
  );
}
