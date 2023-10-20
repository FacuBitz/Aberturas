import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  ImageList,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ItemDetail = ({ data }) => {
  return (
    <div>
      {data.map((prod) => (
        <Box pt="50px" key={prod.id}>
          <Card maxW="sm">
            <Card>
              <ImageList src={prod.img} alt={prod.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Typography size="md">{prod.name}</Typography>
                <Typography>{prod.description}</Typography>
                <Typography color="blue.600" fontSize="2xl">
                  {prod.price}
                </Typography>
              </Stack>
            </Card>
            <Divider />
            <Box>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  Agregar
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ItemDetail;
