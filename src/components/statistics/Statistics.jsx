import PropTypes from "prop-types";
import {Statistic, Title, StatisticList, StatisticListItem, Label, Percentage} from './Statistics.styled'

export default function Statistics({title, stats}) {
return  <Statistic>
        {title && <Title>{title}</Title>}

        <StatisticList> {stats.map((stat) => (<StatisticListItem key={stat.id}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}%</Percentage>
            </StatisticListItem>))}
        </StatisticList>
        </Statistic>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}