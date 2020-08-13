import service from '@/utils/service'

const baseUrl = '/api/content/users'

const userApi = {}

userApi.getProfile = () => {
  return service({
    url: `${baseUrl}/profile`,
    method: 'get'
  })
}

export default userApi