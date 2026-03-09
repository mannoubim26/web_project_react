import './Chart.css';

function Chart({ title, data, color = '#39ff14', unit = '' }) {
    const maxValue = Math.max(...data.map((d) => d.value));

    return (
        <div className="chart">
            <h3 className="chart__title">{title}</h3>
            <div className="chart__container">
                <div className="chart__bars">
                    {data.map((item, index) => {
                        const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                        return (
                            <div className="chart__bar-group" key={index}>
                                <span className="chart__bar-value">
                                    {item.value}{unit}
                                </span>
                                <div className="chart__bar-track">
                                    <div
                                        className="chart__bar"
                                        style={{ height: `${heightPercent}%`, backgroundColor: color }}
                                    />
                                </div>
                                <span className="chart__bar-label">{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Chart;
