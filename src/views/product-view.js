import * as React from 'react';
import { connect } from 'react-refetch';

import { Product, Collection } from '@tipser/tipser-elements';
import { Header } from '../components/header';

class ProductViewComponent extends React.Component {

    render() {
        const { productId } = this.props.match.params;
        const { similarProductsFetch } = this.props;

        return <React.Fragment>
            <Header></Header>
            <main>
                <Product productId={productId} />
            </main>
            <h2>Similar products</h2>
            {similarProductsFetch.fulfilled && <div>
                <Collection products={similarProductsFetch.value}/>
            </div>}
        </React.Fragment>
    }
}

export const ProductView = connect(props => ({
    similarProductsFetch: `https://t3-prod-api.tipser.com/v3/products/${props.match.params.productId}/similar?onlyAvailable=true`
  }))(ProductViewComponent)
