import { useGetAllHousesQuery } from '../../services/houseApi'

const IfHouseCommittee = () => {
  const {data, isLoading, error} = useGetAllHousesQuery();

  console.log(data)

  return (
    <div>IfHouseCommittee</div>
  )
}

export default IfHouseCommittee