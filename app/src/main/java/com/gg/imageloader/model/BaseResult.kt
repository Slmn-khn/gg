package com.gg.imageloadert.model

import com.gg.imageloader.model.BaseResponse

sealed class BaseResult {
    data class Success(var baseResponse: BaseResponse) : BaseResult()
    data class Failure(var error: String) : BaseResult()
}