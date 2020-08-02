package com.gg.imageloader.viewmodel

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.gg.imageloader.model.BaseResponse
import com.gg.imageloader.network.OnResponse
import com.gg.imageloadert.model.BaseResult

class ActivityViewModel(private var dataRepository: DataRepository) : ViewModel() {
    var baseResult: MutableLiveData<BaseResult> = MutableLiveData()

    fun getApiImages() {
        dataRepository.fetchImages(object : OnResponse {
            override fun onSuccess(response: BaseResponse) {
                baseResult.value = BaseResult.Success(response)
            }

            override fun onFailure(error: String) {
                baseResult.value = BaseResult.Failure(error)
            }
        })
    }

}