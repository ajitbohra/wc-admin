/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'header';
import StorePerformance from './store-performance';
import TopSellingProducts from './top-selling-products';
import ChartBlock from './chart-block';
import { getChartFromKey } from './chart-block/config';
import { ReportFilters } from '@woocommerce/components';

export default class Dashboard extends Component {
	render() {
		const { query, path } = this.props;
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'wc-admin' ) ] } />
				<ReportFilters query={ query } path={ path } />
				<StorePerformance />
				<div className="woocommerce-dashboard__columns">
					<div>
						<TopSellingProducts />
					</div>
				</div>
				<div className="woocommerce-dashboard__columns">
					<div>
						<ChartBlock
							charts={ getChartFromKey( 'gross_revenue' ) }
							endpoint="revenue"
							path={ path }
							query={ query }
						/>
					</div>
					<div>
						<ChartBlock
							charts={ getChartFromKey( 'orders_count' ) }
							endpoint="orders"
							path={ path }
							query={ query }
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}
