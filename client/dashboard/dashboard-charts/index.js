/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { EllipsisMenu, MenuItem, SectionHeader } from '@woocommerce/components';
import ChartBlock from './block';
import { getChartFromKey, showCharts } from './config';
import './style.scss';

class DashboardCharts extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			showCharts,
		};

		this.toggle = this.toggle.bind( this );
	}

	toggle( key ) {
		return () => {
			this.setState( state => {
				const foundIndex = state.showCharts.findIndex( x => x.key === key );
				state.showCharts[ foundIndex ].show = ! state.showCharts[ foundIndex ].show;
				return state;
			} );
		};
	}

	renderMenu() {
		return (
			<EllipsisMenu label={ __( 'Choose which charts to display', 'wc-admin' ) }>
				{ this.state.showCharts.map( chart => {
					return (
						<MenuItem onInvoke={ this.toggle( chart.key ) }>
							<ToggleControl
								label={ __( `${ chart.label }`, 'wc-admin' ) }
								checked={ chart.show }
								onChange={ this.toggle( chart.key ) }
							/>
						</MenuItem>
					);
				} ) }
			</EllipsisMenu>
		);
	}

	render() {
		const { path, query } = this.props;
		return (
			<Fragment>
				<SectionHeader title={ __( 'Charts', 'wc-admin' ) } menu={ this.renderMenu() } />
				<div className="woocommerce-dashboard__columns">
					{ this.state.showCharts.map( chart => {
						return ! chart.show ? null : (
							<div>
								<ChartBlock
									charts={ getChartFromKey( chart.key ) }
									endpoint={ chart.endpoint }
									path={ path }
									query={ query }
								/>
							</div>
						);
					} ) }
				</div>
			</Fragment>
		);
	}
}

DashboardCharts.propTypes = {
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default DashboardCharts;
