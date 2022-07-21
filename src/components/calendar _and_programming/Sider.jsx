import React from 'react'
import { places } from '../../data/Places'
import { Card } from 'react-bootstrap';
import { CardStyledCalendar, LineStyle, SiderStyle } from '../../styles/calendarStyle';

export const SiderCalendar = () => {
    const data = places.sort(function () { return Math.random() - 0.5 });

    return (
        <SiderStyle className="siderStyle">
            {
                data.map((p) => (
                    <div key={p.name}>
                        <CardStyledCalendar >
                            <img src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                
                            </Card.Body>
                        </CardStyledCalendar>
                        <LineStyle />
                    </div>
                ))
            }
        </SiderStyle>
    )
}
