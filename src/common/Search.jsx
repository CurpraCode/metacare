import React from "react";
import { Input, HStack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {

	return (
		<HStack mr="1rem">
			<InputGroup>
				<Input
					
					placeholder={`Ask us any question`}
					size="lg"
                    width="400px"
					borderRadius="0.5rem"
					bg="#FAFAFC"
					color="#757886"
					border="none"
					fontSize="0.8rem"
					_focus={{
						outline: 0,
					}}
					_placeholder={{
						color: "#757886"
					}}
				/>
				<InputRightElement
					pointerEvents="none"
					children={<SearchIcon color="#A3A3C2" />}
				/>
			</InputGroup>
		</HStack>
	);
}

export default Search;
