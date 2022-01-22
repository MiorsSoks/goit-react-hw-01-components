import PropTypes from "prop-types";
import {Statistic, Title, StatisticList, StatisticListItem, Label, Percentage} from './Statistics.styled'

export default function Statistics({title, stats}) {
return  <Statistic>
        {title && <Title>{title}</Title>}

    <StatisticList> {stats.map(({ id, label, percentage }) => (<StatisticListItem key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </StatisticListItem>))}
        </StatisticList>
        </Statistic>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}