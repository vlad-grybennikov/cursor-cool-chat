import styled from "styled-components";
import React, {ReactNode, Component} from "react";

export interface IField {
    key: string, // ключ в объекте data
    heading: string, // Имя столбца таблицы,
    width?: string,
    headingComponent?(...args): any, // Компонент заголовка
    component?(...args): any // Компонент для отображения значения
}

interface IData {
    [key: string]: any
}

interface ITableProps {
    fields: IField[],
    data: IData[]
}

export const TableWrapper = styled.div`
  width: 100%;
`;
export const TableRow = styled.div`
  display:flex;
  background-color:#fff;
  min-height: 100px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  &:nth-child(2n){
    background-color:#f3f3f3;
  }
`;

interface ITableCell{
    width?: string
}
export const TableCell = styled.div`
  font-weight: 300;
  padding: 10px;
  width: ${(props: ITableCell) => props.width ? props.width : "auto"};
`;
export const TableHeading = styled(TableCell)`
  font-weight: 600;
`;

export default class Table extends Component<ITableProps> {
    render() {
        const {fields, data} = this.props;
        if (!(fields && data)) {
            return null;
        }
        return (
            <TableWrapper>
                <TableRow>
                    {fields.map((field: IField) => {
                        const {headingComponent}: any = field;
                        if(headingComponent) {
                            return (
                                <TableHeading width={field.width}>
                                    {headingComponent(field.heading)}
                                </TableHeading>
                            )
                        }
                        return (
                            <TableHeading width={field.width}>
                                {field.heading}
                            </TableHeading>
                        )
                    })}
                </TableRow>
                {data.map((item: IData) => (
                    <TableRow>
                        {fields.map((field: IField) => {
                            if(field.component){
                                return (
                                    <TableCell width={field.width}>
                                        {field.component(item[field.key])}
                                    </TableCell>
                                )
                            }
                            return (
                                <TableCell width={field.width}>
                                    {item[field.key]}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableWrapper>
        )
    }
}