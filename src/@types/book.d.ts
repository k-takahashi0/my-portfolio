declare namespace book {
	interface Items {
		accessInfo: {
			accessViewStatus: string
			country: string
			embeddable: boolean
			epub: {
				isAvailable: boolean
			}
			pdf: {
				isAvailable: boolean
			}
			publicDomain: boolean
			quoteSharingAllowed: boolean
			textToSpeechPermission: string
			viewability: string
			webReaderLink: string
		}
		etag: string
		id: string
		kind: string
		saleInfo: {
			country: string
			isEbook: boolean
			saleability: string
		}
		searchInfo: {
			textSnippet: string
		}
		selfLink: string
		volumeInfo: {
			allowAnonLogging: boolean
			authors: []
			canonicalVolumeLink: string
			contentVersion: string
			description: string
			imageLinks: {
				smallThumbnail: string
				thumbnail: string
			}
			industryIdentifiers: {
				identifier: string
				type: string
			}[]
			infoLink: string
			language: string
			maturityRating: string
			pageCount: number
			previewLink: string
			printType: string
			publishedDate: string
			publisher: string
			readingModes: {
				image: boolean
				text: boolean
			}
			title: string
		}
	}
}
