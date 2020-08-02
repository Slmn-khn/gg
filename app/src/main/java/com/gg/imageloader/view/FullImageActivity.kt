package com.gg.imageloader.view

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import com.gg.imagelibrary.ImageLoader
import com.gg.imageloader.R
import com.gg.imageloader.model.ImageUrls
import kotlinx.android.synthetic.main.second_activity.*


class FullImageActivity : AppCompatActivity() {

    private lateinit var mUrls: ImageUrls

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.second_activity)

        val bundle = intent.getBundleExtra("Bundle")
        mUrls = bundle.getParcelable<ImageUrls>("URLS") as ImageUrls
        mUrls.let {
            val imageLoader = ImageLoader.with(this)
            imageLoader.load(mUrls.largeImageUrl,imageView2,progressBar)
        }

        btnCancel.setOnClickListener {
            finish()
        }

    }
}