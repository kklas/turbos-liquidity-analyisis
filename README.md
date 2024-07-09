# README

To run:

```
# pnpm install
# pnpm build
# node dist/main.js
```

`tick-ids.csv` were fetched from Sentio using the following query:

```sql
select object_id from `sui.object_histories`
where object_type = '0x2::dynamic_field::Field<0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::i32::I32, 0x91bfbc386a41afcfd9b2533058d7e915a1d3829089cc268ff4333d54d6339ca1::pool::Tick>'
and owner_id = '0x2ce764106ace913ff43f3c1fd6a91454898a42710464cd60d220130eb78ca5ca'
group by object_id;
```
