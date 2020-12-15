import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Colors } from "../../../constants/colors";
import { getAccountOperations, getSelectedOperation } from "../../../selectors/accountSelectors";
import { changeOperation } from "../../../actions/operationActions";
import { DropdownHeader, SearchField } from "../FormComponents";
import { Fonts } from "../../../constants/fonts";
import { ColumnContainer, RowContainer } from "../ContainerComponents";
import { cloneDeep } from "lodash";
import { CheckIcon } from "../../../res/img/icons";

const Wrapper = styled.div`
  height: 64px;
  background-color: ${Colors.SurfieGreen};
  position: fixed;
  width: 100%;
  border-bottom: 5px solid ${Colors.MidnightExpress};
`;

// Used mostly for light line.
const InnerWrapper = styled.div`
  height: 100%;
  border-bottom: 1px solid ${Colors.Cerulean};
  padding: 0 45px;
`;

// Translated because the items arent centered in prototype.
const BarContent = styled.div`
  font-family: ${Fonts.DefaultBlack};
  color: white;
  display: flex;
  align-items: center;
  transform: translateY(23px);
`;

const OperationListWrapper = styled.div`
  transition: max-height 0.2s ease-in-out;
  position: fixed;
  transform: translateY(70px);
  background-color: white;
  border-radius: 4px;
  margin: 0 10px;
  max-height: ${props => (props.isOpen ? "590" : 0)}px;
  overflow: hidden;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.2);
  min-width: 435px;
  width: calc(${props => props.widthMultiplier * 33.33}% - 250px);
  z-index: 10;
`;

const OperationsListInner = styled.div`
  padding: 35px;
  overflow: hidden;
`;

const OperationsHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.Cerulean};
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 15px;
  font-family: ${Fonts.DefaultBold};
  font-size: 16px;
`;

const OperationsListItemButton = styled.div`
  color: ${Colors.CloseToBondiBlue};
  font-size: 15px;
  display: flex;
  background: none;
  border: none;
  border-bottom: 1px solid ${Colors.AthensGray};
  padding: 10px 5px;
  white-space: nowrap;
  font-family: ${Fonts.Default};
  text-overflow: ellipsis;
  width: 100%;

  :focus {
    outline: none;
  }
  :hover {
    border-color: ${Colors.Iron};
  }
`;

const OperationsListItem = props => {
  const { isCurrentOp } = props;

  return (
    <RowContainer style={{ alignItems: "center" }}>
      {isCurrentOp ? <CheckIcon /> : <div style={{ width: "24px" }} />}
      <OperationsListItemButton {...props} />
    </RowContainer>
  );
};

const OperationsWrapper = styled(RowContainer)`
  width: 100%;
  max-height: 425px;
  margin: 20px 0;
  overflow: auto;
`;

const HorizLineDivider = styled.div`
  border-right: 1px solid ${Colors.Iron};
  margin: 0 20px;
`;

const OperationsList = props => {
  const { operations, isOpen, setOperation, selectedOperation, setOpen } = props;
  const [searched, setSearched] = useState("");

  const filteredOperations = operations.filter(operation =>
    operation.operation.name.toUpperCase().includes(searched.toUpperCase())
  );

  let widthMultiplier;

  switch (operations.length) {
    case 0: {
      widthMultiplier = 1;
      break;
    }
    case 1: {
      widthMultiplier = 1;
      break;
    }
    case 2: {
      widthMultiplier = 2;
      break;
    }
    default: {
      widthMultiplier = 3;
    }
  }

  const columns = [];

  switch (filteredOperations.length) {
    case 0: {
      break;
    }
    case 1: {
      columns[0] = [...filteredOperations];
      break;
    }
    case 2: {
      const opCopy = cloneDeep(filteredOperations);
      columns[0] = [...opCopy.splice(0, Math.ceil(opCopy.length / 2))];
      columns[1] = [...opCopy];
      break;
    }
    default: {
      const opCopy = cloneDeep(filteredOperations);
      //The minimum number of items in each column
      const minItems = Math.floor(opCopy.length / 3);

      // Will find which is the last column to be considered "big".
      // Ex. There are 5 items, so columns 1 and 2 are big with column 3 having a smaller amt of items.
      const lastBigColumn = opCopy.length % 3;

      // Column 1 - starts at 0, ends at the minItems plus 1 if there is a remainder.
      columns[0] = [...opCopy.splice(0, minItems + Math.ceil(lastBigColumn / 2))];
      // Column 2 - since its a splice, will still start at 0.
      columns[1] = [...opCopy.splice(0, minItems + Math.floor(lastBigColumn / 2))];
      // Column 3 is the items left over.
      columns[2] = [...opCopy];
    }
  }

  return (
    <>
      <OperationListWrapper isOpen={isOpen} widthMultiplier={widthMultiplier}>
        <OperationsListInner>
          <OperationsHeader>
            OPERATIONS
            <SearchField value={searched} onChange={e => setSearched("" + e.target.value)} />
          </OperationsHeader>
          <OperationsWrapper>
            <div style={{ width: "100%" }}>
              <RowContainer>
                {columns.map((column, index) => (
                  <RowContainer key={"operation col " + index} style={{ flexGrow: 1, flex: 1 }}>
                    <ColumnContainer>
                      {column.map(operationObject => (
                        <OperationsListItem
                          key={operationObject.operation.uuid}
                          onClick={() => {
                            setOperation(operationObject.operation.uuid);
                            setOpen(false);
                          }}
                          isCurrentOp={
                            selectedOperation &&
                            selectedOperation.uuid === operationObject.operation.uuid
                          }
                        >
                          {operationObject.operation.name}
                        </OperationsListItem>
                      ))}
                    </ColumnContainer>
                    {index < columns.length - 1 && <HorizLineDivider />}
                  </RowContainer>
                ))}
              </RowContainer>
            </div>
          </OperationsWrapper>
        </OperationsListInner>
      </OperationListWrapper>
    </>
  );
};

const OperationBarComponent = props => {
  const { selectedOperation, accountOperations, changeOperation } = props;

  const [isOpMenuOpen, setOpMenuOpen] = useState(!selectedOperation);
  const selectedOperationName = selectedOperation ? selectedOperation.name : "Select and Operation";

  return (
    <>
      <div style={{ height: "65px", marginBottom: "5px", zIndex: 2 }}>
        <Wrapper>
          <InnerWrapper>
            <BarContent>
              <DropdownHeader
                label={selectedOperationName}
                isOpen={isOpMenuOpen}
                setOpen={setOpMenuOpen}
              />
            </BarContent>
          </InnerWrapper>
        </Wrapper>
      </div>
      <OperationsList
        operations={accountOperations}
        currOperation={selectedOperation}
        setOperation={operationUUID => changeOperation(operationUUID)}
        isOpen={isOpMenuOpen}
        selectedOperation={selectedOperation}
        setOpen={setOpMenuOpen}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  changeOperation: operationUUID => dispatch(changeOperation(operationUUID)),
});

const mapStateToProps = state => ({
  selectedOperation: getSelectedOperation(state),
  accountOperations: getAccountOperations(state),
});

const OperationBar = connect(mapStateToProps, mapDispatchToProps)(OperationBarComponent);

export default OperationBar;
