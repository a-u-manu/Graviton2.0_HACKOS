import React from 'react';
import GenerateCombinations from './GenerateCombinations'; 

function Split({ data, header }) {
  if (!data || data.length === 0) {
    return <div>No data provided</div>;
  }

  const split = (inputData) => {
    return inputData.map(item => {
      const { header, paragraph } = item;
      const sentences = paragraph.split('.').filter(sentence => sentence.trim() !== '');

      const newParagraph = {};
      sentences.forEach((sentence, index) => {
        newParagraph[index + 1] = sentence.trim();
      });

      return {
        header: header, // Use the header prop passed from App component
        paragraph: newParagraph
      };
    });
  };

  const transformedData = split(data);

  // Pass transformedData as a prop to GenerateCombinations component
  return (
    <GenerateCombinations data={transformedData} />
  );
}

export default Split;
