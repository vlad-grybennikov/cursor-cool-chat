import React, {Component} from "react";
import {BillsWrapper, Circle} from "./bills.view";
import Table, {IField} from "../common/table";
import Button from "../common/button";
import {Heading} from "../common/heading";


interface IBillsProps{

}

interface IBillsState {
    data: any[]
}

export default class Bills extends Component<IBillsProps, IBillsState>{
    public fields: IField[] = [{
        heading: "№",
        key: "number",
        width: "100px"
    }, {
        heading: "Name",
        key: "name",
        width: "100%"
    }, {
        heading: "Total",
        key: "total",
        width: "30%",
    }, {
        heading: "Paid",
        key: "isPaid",
        width: "100px",
        component: (isPaid) => <Circle value={isPaid} />
    }]

    state = {
        data: [{
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Water",
            total: "12.37$",
            isPaid: true
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }, {
            number: "1",
            name: "Electric",
            total: "32.50$",
            isPaid: false
        }]
    }

    pay = () => {
        const link = "https://secure.wayforpay.com/page?vkh=5ea43249-4f40-4079-9d4b-72c722d1dba8";
        Object.assign(document.createElement('a'), {
            target: '_blank',
            href: link,
        }).click();
    }

    render(){
        return (
            <BillsWrapper>
                <Heading>Your Bills</Heading>
                <Button onClick={this.pay}>
                    Pay your bills
                </Button>
                <Table data={this.state.data} fields={this.fields}/>
            </BillsWrapper>
        )
    }
}