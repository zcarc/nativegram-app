import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width / 2};
  padding: 10px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid ${props => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  value,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  onChange,
  returnKeyType = "done",
  onEndEditing = () => null,
  autoCorrect = true,
}) => (
  <Container>
    <TextInput
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      onChangeText={onChange}
      returnKeyType={returnKeyType}
      onEndEditing={onEndEditing}
      autoCorrect={autoCorrect}
    />
  </Container>
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  onChange: PropTypes.func.isRequired,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onEndEditing: PropTypes.func,
  autoCorrect: PropTypes.bool,
};

export default AuthInput;