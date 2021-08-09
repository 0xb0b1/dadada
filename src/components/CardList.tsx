import { Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Card } from "./Card";
// import { ModalViewImage } from "./ModalViewImage";

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export const CardList = ({ cards }: CardsProps): JSX.Element => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [imageUrl, setImageUrlSelected] = useState("");

  const handleViewImage = (url: string): void => {
    setImageUrlSelected(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards?.map((card, index) => (
          <Card
            key={index}
            data={card}
            viewImage={(url) => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
