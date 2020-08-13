import service from '@/utils/service'

const baseUrl = '/api/content/posts'

const postApi = {}

postApi.list = params => {
  return service({
    url: baseUrl,
    params: params,
    method: 'get'
  })
}

postApi.get = postId => {
  return service({
    url: `${baseUrl}/${postId}`,
    params: {
      formatDisabled: false,
      sourceDisabled: true
    },
    method: 'get'
  })
}

export default postApi