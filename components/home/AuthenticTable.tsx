import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";

const tableData = [
  {
    feature: "Context",
    authentic:
      "No context or forced context that is not relevant to student's life, culture, or community",
    typical:
      "Relevant context that draw on student's experiences, culture, or community",
  },
  {
    feature: "Intuition",
    authentic:
      "Can be approached using a student's intuition. Possible to make an educated guess",
    typical:
      "Impossible to approach the problem without having learned the standard or formula",
  },
  {
    feature: "Solutions",
    authentic:
      "There are multiple reasonable solutions, often times with different tradeoffs",
    typical: "There is a single correct solution.",
  },
  {
    feature: "Approaches",
    authentic: "There are multiple ways to solve the problem",
    typical: "There a single way to solve the problem.",
  },
  {
    feature: "Feedback",
    authentic: "Students receive feedback from peers.",
    typical: "Student's answer is right or wrong.",
  },
  {
    feature: "Iteration",
    authentic:
      "Students can constantly improve their answer based on feedback and new learning",
    typical:
      "Students have little chance to improve their answer based on feedback",
  },
];

const AuthenticTable = () => {
  return (
    <Table variant="striped" size="sm" maxWidth={600} margin="auto">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Authentic</Th>
          <Th>Typical</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td></Td>
          <Td>
            <Text as="i" fontSize="sm">
              Where should we build cell towers to provide cellular access to
              the most residents?
            </Text>
          </Td>
          <Td>
            <Text as="i">
              Diego's rectangular bedroom is 4 meters by 3 meters. What is the
              diagonal distance from one corner to the opposite corner?
            </Text>
          </Td>
        </Tr>
        {tableData.map((row) => {
          return (
            <Tr>
              <Td>
                <Text as="b">{row.feature}</Text>
              </Td>
              <Td>{row.authentic}</Td>
              <Td>{row.typical}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default AuthenticTable;
