import Head from "next/head";
import {
  Box,
  Heading,
  Grid,
  Button,
  Text,
  Divider,
  GridItem,
  Stack,
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
          <Box mt={4} textAlign="center" display="inline-block">
            <Link href="/project/1">
              <Button colorScheme="teal" width={100}>
                Try It!
              </Button>
            </Link>
            <Box display="inline-block">
              <Button
                colorScheme="teal"
                variant="outline"
                ml={4}
                onClick={() => {
                  if (document) {
                    document
                      .getElementById("waitlist")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Join Wait List
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider mt={8} />
        <Box mt={10} mb={50}>
          <Heading mb={10} size="lg">
            What makes a problem authentic?
          </Heading>
          <AuthenticTable />
        </Box>
        <Box id="waitlist" width={[300, 600]} margin="auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScO_0FpyvMGuCOAlhgJngKVi78fICSTsGYAvn9LyVcWudf2fQ/viewform?embedded=true"
            width="100%"
            height={600}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </Box>
      </Box>
    </Box>
  );
}
