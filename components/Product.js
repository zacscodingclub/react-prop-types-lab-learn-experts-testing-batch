const React = require('react');

class Product extends React.Component {
    render() {
        return (    
            <div className="product">
                <h1>{this.props.name}</h1>
                {this.props.producer ? <p>{this.props.producer}</p> : null}
                <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
                <p>{this.props.color}</p>
                <p>{this.props.weight}</p>
            </div>
        )
    }
};

Product.defaultProps = {
    hasWatermark: false
};

Product.propTypes = {
    name: React.PropTypes.string.isRequired,
    producer: React.PropTypes.string,
    hasWatermark: React.PropTypes.bool,
    color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
        const weight = props[propName];

        if(weight === undefined) {
            return new Error('The `weight` property is required.');
        }

        if(isNaN(weight)) {
            return new Error('The `weight` prop is not a number.')
        }

        const isValidWeight = weight > 80 && weight < 300;

        if(!isValidWeight) {
            return new Error('The `weight` prop should be between 80 and 300.')
        }
    }
};

module.exports = Product;
