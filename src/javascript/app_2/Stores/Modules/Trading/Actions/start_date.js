import ContractType from '../Helpers/contract_type';

export const onChangeStartDate = async (store) => {
    const {
        contract_type,
        duration_unit,
        expiry_time,
        start_date,
        symbol } = store;
    const server_time = store.root_store.common.server_time;
    let {
        start_time,
        expiry_date,
        expiry_type } = store;

    start_time = start_time || server_time.clone().add(6, 'minute').format('HH:mm'); // when there is not a default value for start_time, it should be set more than 5 min after server_time

    const obj_contract_start_type = ContractType.getStartType(start_date);
    const contract_start_type     = obj_contract_start_type.contract_start_type;
    const obj_sessions            = ContractType.getSessions(contract_type, start_date);
    const sessions                = obj_sessions.sessions;
    const obj_start_time          = ContractType.getStartTime(sessions, start_date, start_time);
    start_time                    = obj_start_time.start_time;

    const obj_duration_units_list = ContractType.getDurationUnitsList(contract_type, contract_start_type);
    const obj_duration_unit       = ContractType.getDurationUnit(duration_unit, contract_type, contract_start_type);

    const obj_expiry_type = ContractType.getExpiryType(obj_duration_units_list.duration_units_list, expiry_type);
    expiry_type           = obj_expiry_type.expiry_type;
    const obj_expiry_date = ContractType.getExpiryDate(expiry_date, start_date, expiry_type);
    expiry_date           = obj_expiry_date.expiry_date;
    const obj_expiry_time = await ContractType.getExpiryTime(
        sessions,
        start_date,
        start_time,
        expiry_date,
        expiry_time,
        expiry_type,
        symbol
    );

    const obj_duration_min_max = ContractType.getDurationMinMax(contract_type, contract_start_type);
    const obj_market_close_times = { market_close_times: await ContractType.getTradingTimes(expiry_date, symbol) };

    return {
        ...obj_contract_start_type,
        ...obj_duration_units_list,
        ...obj_duration_min_max,
        ...obj_duration_unit,
        ...obj_sessions,
        ...obj_start_time,
        ...obj_expiry_date,
        ...obj_expiry_time,
        ...obj_expiry_type,
        ...obj_market_close_times,
    };
};
