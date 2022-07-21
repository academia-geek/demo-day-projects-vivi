import React from 'react'
import { places } from '../../data/Places'
import { Card } from 'react-bootstrap';
import { CardStyledCalendar, LineStyle, SiderStyle } from '../../styles/calendarStyle';

export const SiderCalendar = () => {
    const data = places.sort(function () { return Math.random() - 0.5 });

    return (
        <SiderStyle>
            {
                data.map((p) => (
                    <div key={p.name}>
                        <CardStyledCalendar >
                            <div className="d-flex align-items-center gap-3">
                                <img src={p.image} />
                                <Card.Title>{p.name}</Card.Title>
                            </div>
                            <p>{p.description}</p>
                        </CardStyledCalendar>
                        <LineStyle />
                    </div>
                ))
            }
        </SiderStyle>
    )
}
