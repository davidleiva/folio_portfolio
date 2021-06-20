import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box, Title, Text } from "../Core";

const WorkBox = styled(Box)``;
const TextBox = styled(Box)`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
  }
  ${WorkBox}:hover & {
    bottom: 20px;
    opacity: 1;
  }
`;

const WorkCard = ({ workItem, link, ...rest }) => (
  <WorkBox className="position-relative" {...rest}>
    <Link className="d-block"> {/* to={link}  */}
      <img src={workItem.thumbnail} alt="" className="w-100" />
    </Link>

    <TextBox>
      <Text variant="tag" mb={2}>
        {/* {workItem.categories[0]} */}
        {workItem && workItem.categories && workItem.categories.map(
          (cat,index) => {
            return (
              <>
              <span className={"mr-1"}>{cat}</span>
              { workItem.categories &&
                (workItem.categories.length > 1 &&
                  index + 1 !== workItem.categories.length) && <span className={"mr-1"}>·</span> }
              </>
            );
          }
        )}
        </Text>
      <Title variant="card">
        <Link >{workItem.brand} </Link> {/* to={link}*/}
      </Title>
    </TextBox>
  </WorkBox>
);

export default WorkCard;
