import { Box, useCheckbox, UseCheckboxProps, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TagCheckboxProps {
  value: string;
  children: ReactNode;
  onChange?: UseCheckboxProps['onChange'];
  checked?: boolean;
}

const TagCheckbox = (props: TagCheckboxProps) => {
  const { value, children, onChange, checked } = props;

  const { getInputProps, getRootProps, getLabelProps, getCheckboxProps } = useCheckbox({
    onChange,
    value,
    isChecked: checked,
  });

  return (
    <label {...getRootProps()}>
      <Box
        {...getCheckboxProps()}
        userSelect='none'
        data-value={value}
        px='4'
        py='2'
        bg={useColorModeValue('gray.100', 'whiteAlpha.50')}
        rounded='lg'
        fontWeight='bold'
        cursor='pointer'
        _hover={{ color: 'accent' }}
        _checked={{ bg: 'accent', color: 'black' }}
        _disabled={{ opacity: 0.4, pointerEvents: 'none', cursor: 'unset' }}
      >
        <span {...getLabelProps()}>{children}</span>
      </Box>
      <input {...getInputProps()} />
    </label>
  );
};

export default TagCheckbox;